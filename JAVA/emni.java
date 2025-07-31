// import java.util.Scanner;

// public class emni {
//   public static void main(String[] args) {

//     String name = fullname("Rakib", "Ahmed");
//     System.out.println(name);
//   }

//   static String fullname(String first, String last) {
//     return first + " " + last;
//   }
// }


public class emni{
  public static void main(String[] args){

    int age = 21;
    if (cheakage(age)){
      System.out.println("You sign up");
    }
    else{
      System.out.println("You cannot sign under 18");
    }

  }


  static Boolean cheakage(int age){
  if(age >= 18){
    return true;
  }
  else{
    return false;
  }
}
  }