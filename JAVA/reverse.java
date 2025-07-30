import java.util.Scanner;

public class reverse {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Your Name: ");
        String name = scanner.nextLine();
        System.out.println("Reverse: "+ new StringBuilder(name).reverse());

        scanner.close();
    }
}
