package technical_test.monitoring_backend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="call_monitoring")
public class CallMonitoring {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "call_id", nullable = false)
    private String callId;

    @Column(name = "call_timestamp", nullable = false)
    private LocalDateTime callTimestamp;

    @Column(name = "cs_name", nullable = false)
    private String csName;

    @Column(name = "customer_name", nullable = false)
    private String customerName;

    @Column(name = "sentiment_score", nullable = false)
    private Integer sentimentScore;

    public CallMonitoring() {}

    public Long getId() {return id; }
    public void setId(Long id) {this.id = id;}

    public String getCallId() { return callId; }
    public void setCallId(String callId) { this.callId = callId; }

    public LocalDateTime getCallTimestamp() { return callTimestamp; }
    public void setCallTimestamp(LocalDateTime callTimestamp) { this.callTimestamp = callTimestamp; }

    public String getCsName() { return csName; }
    public void setCsName(String csName) { this.csName = csName; }

    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }

    public Integer getSentimentScore() { return sentimentScore; }
    public void setSentimentScore(Integer sentimentScore) { this.sentimentScore = sentimentScore; }
}
