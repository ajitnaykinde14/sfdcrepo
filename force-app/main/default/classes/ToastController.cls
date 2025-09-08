public class ToastController {
    @AuraEnabled
    public static void createAccount(String accountName){
        insert new Account(Name=accountName);
    }
}