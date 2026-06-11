public class add_num {
    public static void main(String[] args) {
        int sum = 0;
        for(int i = 2; i <= 100; i+=2){
            sum = sum + i;            
        }
        System.out.println("Sum is:"+ sum);
    }
}
