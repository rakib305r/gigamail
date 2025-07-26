import java.util.Scanner;
public class shoping {
  public static void main(String[] args){

    Scanner tour = new Scanner(System.in);

    String product;
    double price;
    int quantity; 
    char currency = '$';
    double total;
    
    System.out.print("What is the product name?: ");
    product = tour.nextLine();

    System.out.print("How much this product?: ");
    price = tour.nextDouble();
    
    System.out.print("koita product?: ");
    quantity = tour.nextInt();

    total = price * quantity;
    System.out.print("Your Total Amount: " +currency+total);

    tour.close();
    
  }
}