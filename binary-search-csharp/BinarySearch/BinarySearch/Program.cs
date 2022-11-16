using System;

namespace BinarySearch
{
    class Program
    {
        static void Main(string[] args)
        {
            var item = new int[] { 1, 3, 5, 6, 10, 15 };

            Console.WriteLine(Search(item, 4));
            Console.WriteLine(Search(item, 10));
        }


        
        public static bool Search(int[] array, int target)
        {
            var left = 0;
            var right = array.Length - 1;

            while (left < right)
            {
                var mid = (left + right) / 2;
                var middleItem = array[mid];
                if (middleItem == target)
                {
                    return true;
                }
                else if (target < middleItem)
                {
                    right = mid - 1;
                }
                else
                {
                    left = mid + 1;
                }

                // return false;
            }

            return false;

            //time complexity  O(log(n) ) 
            //space complexity O(1)
        }

        public static bool Search(int[] array, int target, int left, int right)
        {
            if (left > right) return false;

            var mid = (right + left) / 2;
            var middleItem = array[mid];
            if (middleItem == target)
            {
                return true; 
            }else if (target < middleItem)
            {
               return Search(array, target, left, mid - 1);
            }
            else
            {
               return Search(array, target, mid + 1, left);
            }
// Time complexity : O(log(n)) 
// Space complexity: O(log(n)) 
        }
    }
    
    
    
}
// See https://aka.ms/new-console-template for more information


