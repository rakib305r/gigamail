import java.util.Scanner;
public class dis {
  public static void main(String[] args){

    Scanner scanner = new Scanner(System.in);

    boolean isStudent = false ;
    boolean isSenior = false;
    double price = 9.99;

    if(isStudent){
      if(isSenior){
        System.out.println("You get a  Student Discount of 20%");
        System.out.println("You get a Senior Discount of 10%");
        price *= 0.7;
      }
      else if(isStudent){
        System.out.println("You get a student Discount of 10%");
        price *= 0.9;
      }
      else if(isSenior){
        System.out.println("You get a Senior Discount of 20%");
        price *= 0.8;
    }
  }
  else{
    System.out.println("You Have No Discount!! ");
    price *= 1;
  }

  System.out.printf("The price of the Ticket is $%.2f", price);
  
  scanner.close();
  }
}
