public class factorial {
    public static void main(String[] args) {
        long factorial = 1; 

        for (int n = 1; n <= 10; n++) {
            factorial = factorial * n;
            System.out.println(n + "!" + " = " + factorial);
        }
    }
}