package technical_test.monitoring_backend.service;

import technical_test.monitoring_backend.entity.CallMonitoring;
import technical_test.monitoring_backend.repository.CallMonitoringRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class CallMonitoringService {
    private final CallMonitoringRepository repository;

    @Autowired
    public CallMonitoringService(CallMonitoringRepository repository) {
        this.repository = repository;
    }

    public Page<CallMonitoring> getAll(
            int page,
            String search,
            LocalDateTime startDate,
            LocalDateTime endDate,
            String sentimentFilter,
            String sortBy,
            String sortDir
    ) {
        Specification<CallMonitoring> spec = buildSpecification(search, startDate, endDate, sentimentFilter);

        Sort sort = Sort.by(
                sortDir.equalsIgnoreCase("desc") ? Sort.Direction.DESC : Sort.Direction.ASC, sortBy
        );

        Pageable pageable = PageRequest.of(page, 5, sort);
        return repository.findAll(spec, pageable);
    }

    private Specification<CallMonitoring> buildSpecification(
            String search, LocalDateTime startDate, LocalDateTime endDate, String sentimentFilter) {
        return (root, query, cb) -> {
            List<jakarta.persistence.criteria.Predicate> predicates = new ArrayList<>();

            if (search != null && !search.isBlank()) {
                String pattern = "%" + search.toLowerCase() + "%";
                predicates.add(cb.or(
                        cb.like(cb.lower(root.get("callId")), pattern),
                        cb.like(cb.lower(root.get("csName")), pattern),
                        cb.like(cb.lower(root.get("customerName")), pattern)
                ));
            }

            if (startDate != null && endDate != null) {
                predicates.add(cb.between(root.get("callTimestamp"), startDate, endDate));
            }

            if (sentimentFilter!= null) {
                if (sentimentFilter.equals("below70")) {
                    predicates.add(cb.lessThan(root.get("sentimentScore"), 70));
                } else if (sentimentFilter.equals("70orAbove")) {
                    predicates.add(cb.greaterThanOrEqualTo(root.get("sentimentScore"),70));
                }
            }

            return cb.and(predicates.toArray(new jakarta.persistence.criteria.Predicate[0]));
        };
    }
}

