namespace recursion_example
{
    public class Fibonacci
    {
        // write a function fib that takes in a number n and return the n-th number of the Fibonacci sequence 
        //the first two number of the Fibonacci sequence  are 1 and 1 
        // the next number of the sequence can be calculated by taking the sum of the previous two 

        public static int Compute()
        {
            return Fib(6);
        }
        public static int Fib(int n)
        {
            if (n == 1 || n == 2) return 1;

            return Fib(n - 1) + Fib(n - 2);
        }
    }
}