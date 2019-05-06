/* Using state that we want to access namespaces, prebuilt code in c#. These are essentially libraries of code. Without them C# and any programing language is pretty
 * barebones and you would have to ALOT of work for these seemingly simple tasks. */
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/* This is our own custom namespace, it does not have anything prebuilt in it, a blank slate. anything built in this will not conflict with other created namespaces, they are outside its scope */
namespace HelloWorld
{
    class Program
    {
        /*  main is the meat of a program, it is where a program with start procedures and begin calculating out statements. this is where we will call other classes and functions.*/
        static void Main(string[] args)
        {
            // this line is from the System library, and will write its argument to the command line.
            Console.WriteLine("Hello World!");
            //this line waits for the user to press a key before terminating the console window. Without this the program would print 'Hello World" and immediately close the command prompt.
            Console.Read();
        }
    }
}
