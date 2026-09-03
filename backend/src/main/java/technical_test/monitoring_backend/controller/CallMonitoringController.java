package technical_test.monitoring_backend.controller;

import technical_test.monitoring_backend.entity.CallMonitoring;
import technical_test.monitoring_backend.service.CallMonitoringService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/monitoring")
@CrossOrigin(origins = "http://localhost:5173") // react dev server
public class CallMonitoringController {
    private final CallMonitoringService service;

    @Autowired
    public CallMonitoringController(CallMonitoringService service) {
        this.service = service;
    }

    @GetMapping
    public List<CallMonitoring> getAll() {
        return service.getAll();
    }
}
