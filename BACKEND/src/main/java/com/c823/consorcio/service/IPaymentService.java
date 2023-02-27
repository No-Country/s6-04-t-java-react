package com.c823.consorcio.service;

import com.c823.consorcio.dto.NewPreferenceDTO;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.preference.Preference;
import org.springframework.http.ResponseEntity;

public interface IPaymentService {
    Preference createBillPayment(Long transactionId) throws MPException, MPApiException;

    ResponseEntity create(NewPreferenceDTO preferenceDTO) throws MPException, MPApiException;
}
