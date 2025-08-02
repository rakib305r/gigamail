/*public class array{
  public static void main(String[] args) {
    String[] vagitables = {"onion", "carrot", "pottato"};
    String[] fruits = {"apple" , "banana", "mango"};
    String[] name = {"rakib", "rayhan", "ohi"};

    String[][] varaitige = {{"onion", "carrot", "pottato"},
                            {"apple" , "banana", "mango"},
                             {"rakib", "rayhan", "ohi"}};

    varaitige[2][0] = "sumi";

    for(String[] all : varaitige){
      for(String alls : all){
        System.out.print(alls + " ");
      }
      System.out.println();
    }
  }
}*/

public class array{
  public static void main(String[] args){

    char[][] telephone = {{'1' , '2' , '3'},
                          {'4' , '5' , '6'},
                          {'7' , '8' , '9'},
                          {'*' , '0' , '#'}};

    for(char[] num : telephone){
      for(char numbers : num){
        System.out.print(numbers +" ");
      }
      System.out.println();
    }                     
  }
}