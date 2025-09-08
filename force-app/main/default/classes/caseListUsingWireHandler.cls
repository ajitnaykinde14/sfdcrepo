public class caseListUsingWireHandler {
        @AuraEnabled(cacheable=true)
        public static List<Case>getLatestCases(){
            return [SELECT Id,Priority,Status,Subject,Type FROM Case ORDER BY CreatedDate LIMIT 5];
    }
}