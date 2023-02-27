package com.c823.consorcio.service.Impl;

import com.c823.consorcio.dto.NewPreferenceDTO;
import com.c823.consorcio.dto.TransactionDto;
import com.c823.consorcio.entity.UserEntity;
import com.c823.consorcio.repository.IUserRepository;
import com.c823.consorcio.service.IPaymentService;
import com.c823.consorcio.service.ITransactionService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mercadopago.MercadoPagoConfig;
import com.mercadopago.client.preference.*;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.preference.Preference;
import com.mercadopago.resources.preference.PreferenceBackUrls;
import java.util.stream.Collectors;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;

/*public class PaymentServiceImpl implements IPaymentService{

    @Value("${access.token}")
    private String accessToken;

    @Autowired
    public ITransactionService transactionService;
    public IUserRepository userRepository;

  @Override
    public Preference createBillPayment(Long transactionId) throws MPException, MPApiException {
        TransactionDto transaction = transactionService.getDetails(transactionId);
      String email = SecurityContextHolder.getContext().getAuthentication().getName();
      UserEntity user = userRepository.findByEmail(email);


        MercadoPagoConfig.setAccessToken(accessToken);

        PreferenceClient preferenceClient = new PreferenceClient();

        List<PreferenceItemRequest> items = new ArrayList<>();
        PreferenceItemRequest item = PreferenceItemRequest.builder()
                .title("Pago del Mes")
                .quantity(1)
                .unitPrice(BigDecimal.valueOf(transaction.getAmount()))
                .description(transaction.getDescription())
                .currencyId("ARS")
                .build();
        items.add(item);

        //TODO falta que se pueda ingresar el nombre y el email del que va pagar el servicio
        PreferencePayerRequest payerRequest = PreferencePayerRequest.builder()
                .name(user.getFirstName())
                .email(user.getEmail())
                .build();

        //TODO falta configurar los urls para los pagos
        PreferenceBackUrlsRequest backUrls = PreferenceBackUrlsRequest.builder()
                .success("http://localhost:8080/api/v1/payment/success")
                .failure("http://localhost:8080/api/v1/payment/failure")
                .pending("http://localhost:8080/api/v1/payment/pending")
                .build();


        PreferenceRequest request = PreferenceRequest.builder()
                .items(items)
                .backUrls(backUrls)
                .payer(payerRequest)
                .build();


        Preference create = preferenceClient.create(request);
        create.getAutoReturn();

        return create;

    }


    private final Gson gson = new GsonBuilder().setPrettyPrinting().create();


    public ResponseEntity create(NewPreferenceDTO preferenceDTO) throws MPException, MPApiException {
      if (StringUtils.isEmpty(preferenceDTO.getAccessToken())) {
        return ResponseEntity.badRequest().body("Access token is mandatory");
      }
      if (preferenceDTO.getItems().isEmpty()) {
        return ResponseEntity.badRequest().body("Items empty");
      }
      String email = SecurityContextHolder.getContext().getAuthentication().getName();
      UserEntity user = userRepository.findByEmail(email);


      MercadoPagoConfig.setAccessToken(accessToken);

      PreferenceClient preferenceClient = new PreferenceClient();

      List<PreferenceItemRequest> items = new ArrayList<>();
      PreferenceItemRequest item = PreferenceItemRequest.builder()
          .title("Pago del Mes")
          .quantity(1)
          .unitPrice(BigDecimal.valueOf(transaction.getAmount()))
          .description(transaction.getDescription())
          .currencyId("ARS")
          .build();
      items.add(item);

      //TODO falta que se pueda ingresar el nombre y el email del que va pagar el servicio
      PreferencePayerRequest payerRequest = PreferencePayerRequest.builder()
          .name(user.getFirstName())
          .email(user.getEmail())
          .build();

      //TODO falta configurar los urls para los pagos
      PreferenceBackUrlsRequest backUrls = PreferenceBackUrlsRequest.builder()
          .success("http://localhost:8080/api/v1/payment/success")
          .failure("http://localhost:8080/api/v1/payment/failure")
          .pending("http://localhost:8080/api/v1/payment/pending")
          .build();


      PreferenceRequest request = PreferenceRequest.builder()
          .items(items)
          .backUrls(backUrls)
          .payer(payerRequest)
          .build();


      Preference create = preferenceClient.create(request);
      create.getAutoReturn();

      return ResponseEntity.ok(gson.toJson(items));

    };
  }*/

