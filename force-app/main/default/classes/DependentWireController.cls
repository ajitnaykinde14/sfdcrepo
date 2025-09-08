public with sharing class DependentWireController {
    @AuraEnabled(cacheable=true)
    public static List<Task>getTaskByAccountName(String accountName){
        try {
            return [SELECT Id, Subject, Priority, ActivityDate, Status, What.Name FROM Task WHERE What.Name=:accountName];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}