using System.Linq;

namespace recursion_example
{
    // given an array of number find the sum , using recursion 
    public static class SumOfArray
    {
        public static int Compute()
        {
            int[] items =  new int[] { 1, 1, 1, 1 };
            return Sum(items, 0);
        }
        public static int Sum(int[] array)
        {
            if (array.Length == 0) return 0;

            var arrayWithoutFirstIndex = array.Skip(1).ToArray();
            return array[0] + Sum(arrayWithoutFirstIndex);
            ;
            
            //Time Complexity = O(n^2) 
            // Space complexity = O(n) 
        }

        public static int Sum(int[] array, int idx)
        {
            if (idx == array.Length) return 0;

            return array[idx] + Sum(array, idx + 1); 
            
            //more efficient 
            //Time Complexity = O(n) 
            // Space complexity = O(n) 
        }
    }
}