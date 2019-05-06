using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace W1D1_CSharp_methods
{
    class Program
    {
        static void Main(string[] args)
        {
            string firstName;
            int numb1, numb2;
            string catDog;
            int oddOrEven;
            Console.WriteLine("Hello, what is you name?");
            firstName = Console.ReadLine();
            Console.WriteLine("Good bye " + firstName);
            Console.WriteLine();

            Console.WriteLine("Time for addition.");
            Console.WriteLine("Please enter an integer...");
            numb1 = int.Parse(Console.ReadLine());
            Console.WriteLine("Please enter second integer...");
            numb2 = int.Parse(Console.ReadLine());
            Console.WriteLine(numb1 + numb2);
            Console.WriteLine();
            
            Console.WriteLine("Do you prefer cats? or dogs?");
            catDog = Console.ReadLine();
            if (catDog == "cats")
            {
                Console.WriteLine("Meow!");
            }
            else { Console.WriteLine("Bark!"); }

            Console.WriteLine("Please enter an odd or even number.");
            oddOrEven = int.Parse(Console.ReadLine());
            if(oddOrEven%2 == 1)
            {
                Console.WriteLine("Number is odd.");
            }
            else
            {
                Console.WriteLine("Number is Even.");
            }

            Console.Read();
        }
    }
}
