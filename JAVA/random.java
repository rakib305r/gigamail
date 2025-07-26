import java.util.Random;
//import java.util.random;
public class random {
  public static void main(String[] args){

    Random random = new Random();


    int num1;
    int num2;
    int num3;

    num1 = random.nextInt(1,100);
    num2 = random.nextInt(1,100);
    num3 = random.nextInt(1,100);

    System.out.println(num1);
    System.out.println(num2);
    System.out.println(num3);

  }
}
