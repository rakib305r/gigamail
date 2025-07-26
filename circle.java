import java.util.Scanner;
public class circle{
  public static void main(String[] args){
    Scanner scanner = new Scanner(System.in);

     double R;
     double circumference;
     double area; 
     double volume;

     System.out.print("Enter a value of R: ");
     R = scanner.nextDouble();

     area = Math.PI*Math.pow(R, 2);
     circumference = 2*Math.PI*R;
     volume = (4/3)*Math.PI*Math.pow(R, 3);

     System.out.println("Circle Area is: "+ area + "cm²");
     System.out.println("The circumference is: ", circumference+ "cm²");
     System.out.println("Volume is: "+ volume+"cm³");

     scanner.close();
  }
  
}
