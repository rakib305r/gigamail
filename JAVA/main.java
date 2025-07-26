import java.util.Scanner;
public class main{
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Enter Your Name: ");
    String name = scanner.nextLine();

    System.out.print("PLease Enter Your Age: ");
    int age = scanner.nextInt();

    System.out.print("What is Your GPA: ");
    double gpa = scanner.nextDouble();

    System.out.print("Iam Student (true/false): ");
    boolean isstudent = scanner.nextBoolean();

    System.out.println("Hello "+ name);
    System.out.println("you are "+ age +" Years Old");
    System.out.println("And Your GPA "+ gpa);
    System.out.println("Student: "+ isstudent);


    scanner.close();

  }
}