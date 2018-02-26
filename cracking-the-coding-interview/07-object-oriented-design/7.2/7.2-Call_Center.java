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

// Call represents a call from a user. A call has a minimum rank and is assigned to the first employee who can handle it.
public class Call {
  // Minimal rank of employee who can handle this call
  private Rank rank;

  // The person who is calling
  private Caller caller;

  // employee that is handling the call
  private Employee handler;

  public Call(Caller c) {
    rank = Rank.Responder;
    caller = c;
  }

   // Set employee who is handling the call
   public void setHandler(Employee e) { handler = e; }

   public void reply(String message) { ... }
   public Rank getRank() { return rank; }
   public void setRank(Rank r) { rank = r; }
   public void incrementRank() { ... }
   public void disconnect() { ... }
}

// Employee is a super class for the Director, Manager, and Respondent classes. It is implemented as an abstract class since there should be reason to instantiate an Employee directly.
abstract class Employee {
  private Call currentCall = null;
  protected Rank rank;

  public Employee(CallHandler handler) { ... }

  // Start the conversation
  public void receiveCall(Call call) { ... }

  // the issue is resolved, finish the call
  public void callCompleted() { ... }

  // The issue has not been resolved. Escalate the call, and assign a new call to the employee
  public void escalateAndReassign() { ... }

  // Assign a new call to an employee, if the employee is free
  public boolean assignNewCall() { ... }

  // Returns whether or not the employee is free
  public boolean isFree() { return currentCall == null; }

  public Rank getRank() { return rank; }
}
