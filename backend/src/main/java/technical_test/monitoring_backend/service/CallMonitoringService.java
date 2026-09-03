package technical_test.monitoring_backend.service;

import technical_test.monitoring_backend.entity.CallMonitoring;
import technical_test.monitoring_backend.repository.CallMonitoringRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CallMonitoringService {
    private final CallMonitoringRepository repository;

    @Autowired
    public CallMonitoringService(CallMonitoringRepository repository) {
        this.repository = repository;
    }

    public List<CallMonitoring> getAll() {
        return repository.findAll();
    }
}
