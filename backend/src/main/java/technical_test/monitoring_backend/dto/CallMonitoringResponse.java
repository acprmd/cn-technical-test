package technical_test.monitoring_backend.dto;

import java.time.LocalDateTime;

public class CallMonitoringResponse {
    private String callId;
    private LocalDateTime callTimestamp;
    private String csName;
    private String customerName;
    private Integer sentimentScore;

    public CallMonitoringResponse(String callId, LocalDateTime callTimestamp, String csName, String customerName,
    Integer sentimentScore) {
        this.callId = callId;
        this.callTimestamp = callTimestamp;
        this.csName = csName;
        this.customerName = customerName;
        this.sentimentScore = sentimentScore;
    }

    public String getCallId() { return callId; }
    public LocalDateTime getCallTimestamp() { return callTimestamp; }
    public String getCsName() { return csName; }
    public String getCustomerName() { return customerName; }
    public Integer getSentimentScore() { return sentimentScore; }

}
