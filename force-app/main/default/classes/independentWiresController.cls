public with sharing class independentWiresController {
    @AuraEnabled(cacheable=true)
    public static List<Case>fetchCases(){
        return [SELECT Id, Status, Reason, Origin, Type, Priority FROM Case LIMIT 5];
    }
    @AuraEnabled(cacheable=true)
    public static List<Task>fetchTasks(){
        return [SELECT Id, Status, Description, Priority FROM Task LIMIT 5];
    }
}