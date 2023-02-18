package com.c823.consorcio.service;

import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.preference.Preference;

public interface IPaymentService {
    Preference createBillPayment(Long transactionId) throws MPException, MPApiException;
}
