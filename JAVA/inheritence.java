class Student {
    String Name;
    int Roll;

    void GetData() {
        Name = "Rakib Ahmedd";
        Roll = 871203;
    }

    void Display() {
        System.out.println("Roll is: " + Roll);
        System.out.println("Name is: " + Name);
    }
}

class Result extends Student {
    float Mark;
    @Override
    void GetData() {
        super.GetData();
        Mark = 85.5f;
    }

    @Override
    void Display() {
        super.Display();
        System.out.println("Mark is: " + Mark);
    }
}

class exam extends Result {
    @Override
    void Display() {
        super.Display();
    }
}
