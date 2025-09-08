public with sharing class taskController {
    @AuraEnabled(cacheable=true)
    public static List<Task>getTaskata(String subjectString){
        return [SELECT Id, ActivityDate, Priority, Status, Subject FROM Task WHERE Subject =: subjectString];
    }
}