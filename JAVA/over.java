class Student {

    int cal(int x, int y) {
        int z = x + y;
        System.out.println("Result is: " + z);
        return 0;
    }

    float cal(float m1, float m2) {
        float mark = m1 + m2;
        System.out.println("Mark is: " + mark);
        return 0;
    }

    int cal(int x) {
        System.out.println("Roll is:"+ x);
        return 0;
    }
}
public class over {
    public static void main(String[] args) {
        Student s = new Student();

        s.cal(50,40);
        s.cal(2.93f, 1.00f);
        s.cal(871203);
    }
}