package com.c823.consorcio.controller;

/*import com.c823.consorcio.dto.NewPreferenceDTO;
import com.c823.consorcio.service.Impl.PaymentServiceImpl;
import com.mercadopago.exceptions.MPException;
import java.util.logging.Logger;
import javax.servlet.http.HttpServletRequest;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

@RestController
public class PaymentController {

  private final Logger logger = (Logger) LoggerFactory.getLogger(this.getClass());
  private final PaymentServiceImpl paymentService;

  public PaymentController(PaymentServiceImpl paymentService) {
    this.paymentService = paymentService;
  }


  @GetMapping("/payment")
    public RedirectView success(
        HttpServletRequest request,
        @RequestParam("collection_id") String collectionId,
        @RequestParam("collection_status") String collectionStatus,
        @RequestParam("external_reference") String externalReference,
        @RequestParam("payment_type") String paymentType,
        @RequestParam("merchant_order_id") String merchantOrderId,
        @RequestParam("preference_id") String preferenceId,
        @RequestParam("site_id") String siteId,
        @RequestParam("processing_mode") String processingMode,
        @RequestParam("merchant_account_id") String merchantAccountId,
        RedirectAttributes attributes)
        throws MPException {
      attributes.addFlashAttribute("genericResponse", true);
      attributes.addFlashAttribute("collection_id", collectionId);
      attributes.addFlashAttribute("collection_status", collectionStatus);
      attributes.addFlashAttribute("external_reference", externalReference);
      attributes.addFlashAttribute("payment_type", paymentType);
      attributes.addFlashAttribute("merchant_order_id", merchantOrderId);
      attributes.addFlashAttribute("preference_id",preferenceId);
      attributes.addFlashAttribute("site_id",siteId);
      attributes.addFlashAttribute("processing_mode",processingMode);
      attributes.addFlashAttribute("merchant_account_id",merchantAccountId);

      return new RedirectView("/");
    }
  @PostMapping(value = "/create", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity createPreference(
      @RequestBody NewPreferenceDTO preferenceDTO
  ) throws MPException {
    return this.paymentService.create(preferenceDTO);
  }

  }*/

