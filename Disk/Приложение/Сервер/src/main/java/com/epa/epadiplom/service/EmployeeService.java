package com.epa.epadiplom.service;

import com.epa.epadiplom.entity.Employee;
import com.epa.epadiplom.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

//    public boolean saveEmployee(Employee employee) {
//        if(employeeRepository.findById(employee.getId()).isPresent()) {
//            employeeRepository.save(employee);
//            return true;
//        }
//        return false;
//    }

}
