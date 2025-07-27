import java.util.Scanner;
public class calculator{
  public static void main (String[] args){
    Scanner scanner = new Scanner(System.in);

    double a = 0;
    double b = 0;

    System.out.println("What Are You Doing?");
    System.out.println("1. +");
    System.out.println("2. -");
    System.out.println("3. *");
    System.out.println("4. /");
    System.out.println("5. square²");
    System.out.println("6. \u221A");
    System.out.print("Please Chose an Operation: (1-6)");
    int choice = scanner.nextInt();
    
    
    System.out.println("Enter Number: ");
    a = scanner.nextDouble();

    if(choice >= 1 && choice <= 4){
    System.out.println("Enter a Value of Second Number: ");
    b = scanner.nextDouble();
    }

    double work;


    if(choice == 1){
      work = a+b;
      System.out.print("Your Number is: "+work);
    }
    else if(choice == 2){
      work = a-b;
      System.out.print("Your Number is: "+work);
    }
    else if(choice == 3){
      work = a*b;
      System.out.print("Your Number is: "+work);
    }
    else if(choice == 4){
      work = a/b;
      System.out.print("Your Number is: "+work);
    }
    else if(choice == 5){
      work = a*a;
      System.out.print("The Square Value Is: "+work);
    }
    else if(choice == 6){
      work = Math.sqrt(a);
      System.out.print("The Square Value Is: "+work);
    }
    else{
      System.out.println("You Chose Invalid Number!! ");
    }



    scanner.close();
  }
}