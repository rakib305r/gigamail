import java.util.Random;
import java.util.Scanner;
public class randomULTRA{
  public static void main(String[] args){
    Random random = new Random();
    Scanner scanner = new Scanner(System.in);

    int min = 1;
    int max = 10;
    int guess;
    int randomnumber = random.nextInt(min,max);
    int attempts = 0;

    System.out.println("RANDOM NUMBER GAME");
    System.out.printf("Guess a random number (%d-%d)\n",min,max);
    
    do{
      System.out.println("Enter your guess: ");
      guess = scanner.nextInt();
      attempts++;

      if(guess>10 || guess<1){
      System.out.println("please enter (1-10): ");
      }

      else if(guess>randomnumber){
        System.out.print("TOO HIGH! Please try  again!!");
      }
      else if(guess < randomnumber){
        System.out.println("TOO LOW! Please try again!!");
      }

      else{
        System.out.printf("YOU HAVE WON!! RANDOM NUMBER IS: %d\n",randomnumber);
        System.out.printf("Attempt is: %d",attempts);
      }
    }while(guess != randomnumber);

    scanner.close();
    }
  }

