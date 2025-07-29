/**import java.util.Scanner;
public class pract {
  public static void main(String[] args){
    Scanner scanner = new Scanner(System.in);

    double ticket;
    int age;

    System.out.print("Enter Your Age: ");
    age = scanner.nextInt();


    if(age<=10){
      System.out.println("You Get Free Ticket!! ");
    }
    else if(age<=18){
      ticket = 10;
      System.out.printf("Your Ticket Amount: $%.2f", ticket);
    }
    else if(age<=40){
      ticket = 60;
      System.out.printf("Your Ticket Amount: $%.2f", ticket);
    }
    else{
      ticket = 100;
      System.out.printf("your Ticket Amount: $%.2f", ticket);
    }
    scanner.close();
  }
  
}
**/

import java.util.Scanner;

public class pract {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Your Name: ");
        String name = scanner.nextLine();
        System.out.println("Reverse: "+ new StringBuilder(name).reverse());

        scanner.close();
    }
}