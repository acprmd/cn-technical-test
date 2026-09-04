package technical_test.monitoring_backend.controller;

import org.springframework.format.annotation.DateTimeFormat;
import java.time.LocalDateTime;

import technical_test.monitoring_backend.dto.CallMonitoringResponse;
import technical_test.monitoring_backend.service.CallMonitoringService;
import org.springframework.data.domain.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public Page<CallMonitoringResponse> getAll(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime startDate,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime endDate,
            @RequestParam(required = false) String sentimentFilter,
            @RequestParam(defaultValue = "callTimestamp") String sortBy,
            @RequestParam(defaultValue = "desc") String sortDir
            ) {
        return service.getAll(page, search, startDate, endDate, sentimentFilter, sortBy, sortDir);
    }
}
