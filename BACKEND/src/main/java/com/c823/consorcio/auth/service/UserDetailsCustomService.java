package com.c823.consorcio.auth.service;
import com.c823.consorcio.auth.dto.AuthenticationRequest;
import com.c823.consorcio.auth.dto.AuthenticationResponse;
import com.c823.consorcio.auth.dto.UserAuthDto;
import com.c823.consorcio.entity.ApartmentEntity;
import com.c823.consorcio.entity.RoleEntity;
import com.c823.consorcio.entity.UserEntity;
import com.c823.consorcio.auth.dto.ResponseUserDto;
import com.c823.consorcio.auth.exception.RepeatedUsername;
import com.c823.consorcio.enums.RoleName;
import com.c823.consorcio.mapper.AccountMap;
import com.c823.consorcio.mapper.ApartmentMap;
import com.c823.consorcio.mapper.UserMap;
import com.c823.consorcio.repository.IApartmentRepository;
import com.c823.consorcio.repository.IRoleRepository;
import com.c823.consorcio.repository.IUserRepository;
import com.c823.consorcio.service.IAccountService;

import com.c823.consorcio.service.IApartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsCustomService implements UserDetailsService {

  @Autowired
  IApartmentRepository iApartmentRepository;
  @Autowired
  UserMap userMap;
  @Autowired
  IRoleRepository iRoleRepository;
  @Autowired
  IUserRepository iUserRepository;
  @Autowired
  IAccountService accountService;
  @Autowired
  ApartmentMap apartmentMap;
  @Autowired
  IApartmentService iapartmentService;
  @Autowired
  AccountMap accountMap;

  // Injecting dependencies for authentication and token generation
  @Autowired
  private AuthenticationManager authenticationManager;
  @Autowired
  private JwtUtils jwtTokenUtils;

  // This method is used by Spring Security to load a user by their email
  @Override
  public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    // Retrieve the user from the repository by email
    UserEntity userEntity = iUserRepository.findByEmail(email);
    // If the user is not found, throw an exception
    if (userEntity == null) {
      throw new UsernameNotFoundException("username or password not found");
    }
    // Use a factory method to create a UserDetails object based on the UserEntity object
    return UserDetailsImpl.build(userEntity);
  }

  // This method is used to save a new user to the database
  public ResponseUserDto save(ResponseUserDto userDto) throws RepeatedUsername {
    // Check if the apartment number already exists in the database
    if (iApartmentRepository.findByApartmentNumber(userDto.getApartmentNumber()) != null){
      throw new RepeatedUsername("Repeted Apartment Number");
    }
    // Convert the UserAuthDto to a UserEntity
    UserEntity entity = this.userMap.userAuthDto2Entity(userDto);
    // Retrieve the role object for a USER role from the role repository
    RoleEntity role = this.iRoleRepository.findByRoleName(RoleName.USER);
    // Set the role of the new user to USER
    entity.setRole(role);
    // Save the new user entity to the database
    UserEntity entitySaved = this.iUserRepository.save(entity);
    // Convert the apartment DTO to an apartment entity
    ApartmentEntity apartmentEntity = this.apartmentMap.apartmentDTO2Entity(userDto);
    // Set the user of the apartment entity to the newly saved user
    apartmentEntity.setUser(entitySaved);
    // Set the floor of the apartment entity to the floor specified in the DTO
    apartmentEntity.setFloor(userDto.getFloor());
    // Save the new apartment entity to the database
    ApartmentEntity apartmentEntitySaved = this.iApartmentRepository.save(apartmentEntity);
    // Create an account for the new user's apartment
    this.accountService.addAccount(apartmentEntitySaved,entitySaved.getEmail());
    // Convert the saved user entity to a DTO
    ResponseUserDto responseUserDto = userMap.userAuthEntity2Dto(entitySaved);
    // Set the apartment number and floor in the DTO
    responseUserDto.setApartmentNumber(apartmentEntity.getApartmentNumber());
    responseUserDto.setFloor(apartmentEntity.getFloor());
    // Return the DTO
    return responseUserDto;
  }

  // This method is used to save a new admin user to the database
  public void saveAdmin(UserAuthDto user) {
  }

  // This method is used to authenticate a user and generate a JWT token
  public AuthenticationResponse signIn(AuthenticationRequest authenticationRequest) {
    // Authenticate the user's credentials using Spring Security's authentication manager
    Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                    authenticationRequest.getEmail(),
                    authenticationRequest.getPassword()
            )
    );

    UserDetails userDetails = (UserDetails) authentication.getPrincipal();
    UserEntity userEntity = iUserRepository.findByEmail(authenticationRequest.getEmail());
    final String jwt = jwtTokenUtils.generateToken(userDetails, userEntity);
    return new AuthenticationResponse(jwt);
  }

}
