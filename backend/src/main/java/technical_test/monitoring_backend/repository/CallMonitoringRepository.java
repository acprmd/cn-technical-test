package technical_test.monitoring_backend.repository;

import technical_test.monitoring_backend.entity.CallMonitoring;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface CallMonitoringRepository extends JpaRepository<CallMonitoring, Long>, JpaSpecificationExecutor<CallMonitoring> {
}
