package technical_test.monitoring_backend.service;

import technical_test.monitoring_backend.entity.CallMonitoring;
import technical_test.monitoring_backend.repository.CallMonitoringRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CallMonitoringService {
    private final CallMonitoringRepository repository;

    @Autowired
    public CallMonitoringService(CallMonitoringRepository repository) {
        this.repository = repository;
    }

    public Page<CallMonitoring> getAll(int page) {
        Pageable pageable = PageRequest.of(page, 5);
        return repository.findAll(pageable);
    }
}
