package technical_test.monitoring_backend.service;

import technical_test.monitoring_backend.dto.CallMonitoringResponse;
import technical_test.monitoring_backend.entity.CallMonitoring;
import technical_test.monitoring_backend.repository.CallMonitoringRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class CallMonitoringServiceTest {

    @Autowired
    private CallMonitoringService service;

    @Autowired
    private CallMonitoringRepository repository;

    @BeforeEach
    public void setup() {
        repository.deleteAll();

        CallMonitoring low = new CallMonitoring();
        low.setCallId("CALL-001");
        low.setCallTimestamp(LocalDateTime.of(2026, 8, 1, 10, 0));
        low.setCsName("Test CS-1");
        low.setCustomerName("Test Customer Low");
        low.setSentimentScore(50);
        repository.save(low);

        CallMonitoring high = new CallMonitoring();
        high.setCallId("CALL-001");
        high.setCallTimestamp(LocalDateTime.of(2026, 8, 2, 10, 0));
        high.setCsName("Test CS-2");
        high.setCustomerName("Test Customer High");
        high.setSentimentScore(90);
        repository.save(high);
    }

    @Test
    public void filterRecordsBelow70Sentiment() {
        Page<CallMonitoringResponse> result = service.getAll(
                0, null, null, null, "below70", "callTimestamp", "desc");
        assertEquals(1, result.getTotalElements());
        assertEquals(50, result.getContent().get(0).getSentimentScore());
    }

    @Test
    public void filtersRecords70OrAboveSentiment() {
        Page<CallMonitoringResponse> result = service.getAll(
                0, null, null, null, "70orAbove", "callTimestamp", "desc");
        assertEquals(1, result.getTotalElements());
        assertEquals(90, result.getContent().get(0).getSentimentScore());
    }
}
