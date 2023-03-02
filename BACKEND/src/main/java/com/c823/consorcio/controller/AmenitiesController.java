package com.c823.consorcio.controller;

import com.c823.consorcio.dto.ReservationBasicDto;
import com.c823.consorcio.dto.ReservationDto;
import com.c823.consorcio.entity.UserEntity;
import com.c823.consorcio.repository.IUserRepository;
import com.c823.consorcio.service.IAmenitiesService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reservations")
@CrossOrigin("https://consorcio-production.up.railway.app")

public class AmenitiesController {
  @Autowired
  private IAmenitiesService amenitiesService;

  @Autowired
  IUserRepository iUserRepository;

  @PostMapping("/amenities")
  public ResponseEntity<ReservationDto> reservation(@RequestBody ReservationDto reservationDto){
    ReservationDto reservation = this.amenitiesService.saveReservation(reservationDto);
    return ResponseEntity.status(HttpStatus.CREATED).body(reservation);
  }
  @GetMapping("/list")
  public ResponseEntity<List<ReservationBasicDto>> listReservations(){
    List<ReservationBasicDto> list = this.amenitiesService.getReservations();
    return ResponseEntity.ok().body(list);
  }

  @GetMapping("/{reservationId}")
  public ResponseEntity<ReservationDto> getDetailsReservation(@PathVariable Long reservationId){
    ReservationDto reservation = this.amenitiesService.getDetailsById(reservationId);
    return ResponseEntity.ok().body(reservation);
  }
  
  @GetMapping("/users")
  @PreAuthorize("hasAuthority('USER')")
  public ResponseEntity<List<ReservationBasicDto>> getUserReservationsUser(Authentication authentication) {
    String username = authentication.getName();
    List<ReservationBasicDto> reservations = this.amenitiesService.getUserReservations(username);
    return ResponseEntity.ok(reservations);
  }

  @GetMapping("/admin")
  @PreAuthorize("hasAuthority('ADMIN')")
  public ResponseEntity<List<ReservationBasicDto>> getUserReservationsAdmin(Authentication authentication) {
    String username = authentication.getName();
    List<ReservationBasicDto> reservations = this.amenitiesService.getUserReservations(username);
    return ResponseEntity.ok(reservations);
  }

  public Long getAuthenticatedUserId() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    String currentPrincipalName = authentication.getName();
    System.out.println( "----! USUARIO : !------------ " + currentPrincipalName);
    UserEntity user = iUserRepository.findByEmail(currentPrincipalName);
    System.out.println(user);
    System.out.println("---------------! NUMERO DE ID : !------------------ " + user.getUserId());
    return user.getUserId();
  }

}
