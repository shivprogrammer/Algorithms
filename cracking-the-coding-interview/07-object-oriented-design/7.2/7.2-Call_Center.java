'use strict';

/*
Call Center: Imagine you have a call center with three levels of employees: respondent, manager, and director. An incoming telephone call must be irst allocated to a respondent who is free. If the respondent can't handle the call, he or she must escalate the call to a manager. If the manager is not free or not able to handle it, then the call should be escalated to a director. Design the classes and data structures for this problem. Implement a method dispatchCall() which assigns a call to the first free available employee.
*/

public class CallHandler {
  // There's three levels of employees: respondents, managers, & directors
  private final int LEVELS = 3;

  // Initializing 10 respondents, 4 managers, and 2 directors.
  private final int NUM_RESPONDENTS = 10;
  private final int NUM_MANAGERS = 4;
  private final int NUM_DIRECTORS = 2;

  // List of employees by level:
  // employeeLevels[0] = respondents
  // employeeLevels[1] = managers
  // employeeLevels[2] = directors
  List<List<Employee>> employeeLevels;

  // queues for each call's rank
  List<List<Call>> callQueues;

  public callHandler() { ... }

  // grabs the first available employee who can handle this call
  public Employee getHandlerForCall(Call call) { ... }

  // route the call to an available employee, if no available employees then save in a queue
  public void dispatchCall(Caller caller) {
    Call call = new Call(caller);
    dispatchCall(call);
  }

  // same comment as before?
  public void dispatchCall(Call call) {
    // Try to route the call to an employee with minimal rank
    Employee emp = getHandlerForCall(call);
    if (emp != null) {
      emp.receiveCall(call);
      call.setHandler(emp);
    }
    else {
      // Place the call into corresponding call queue according to its rank
      call.reply("Please wait for free employee to reply");
      callQueues.get(call.getRank().getValue()).add(call);
    }
  }

  // An employee became free, so look for a waiting call that employee can serve. Return true if we assigned a call, false otherwise.
  public boolean assignCall(Employee emp) { ... }
}
