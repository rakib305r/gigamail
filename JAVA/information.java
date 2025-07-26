import java.util.Scanner;
public class information{
  public static void main(String[] args){ 

    Scanner jamin = new Scanner(System.in);
    int age;
    String name;
    boolean student;

    System.out.print("Enter Your age: ");
    age = jamin.nextInt();
    jamin.nextLine();

    System.out.print("Enter Your name: ");
    name = jamin.nextLine();

    System.out.print("Are you Student?(true/false) ");
    student = jamin.nextBoolean();

 


    if(age<0){
      System.out.println("You haven't born yet!!");
    }
     else if(age<18){
      System.out.println("You are Baby!");
     }
     else if(age>=60){
      System.out.println("You are old man");
     }
     else{
      System.out.println("you are Adult");
     }

     // now this is name part
    
    if(name.isEmpty()){
    System.out.println("Error!!");
    }
    else{
      System.out.println(name);
    }
    System.out.println("Student: " + student);
    
    jamin.close();
  }
}
