using System;
using System.Collections.Generic;
using System.Linq;

namespace recursion_example
{
   
    public static class Combinations
    {
        public static void Compute()
        {
            var result = combinations(new[] { "a", "b", "c" });
            foreach (var item in result)
            {
                var record = string.Join(',', item).Trim(',');
                Console.WriteLine(record);
            }
        }
        public static string[][] combinations(string[] elements)
        {
            if (elements.Length == 0) return new[] { new[] { "" } }; 
            
            var firstElement = elements[0];
            var arrayWithoutFirstElement = elements.Skip(1).ToArray();
            var combsWithOutFirstElement = combinations(arrayWithoutFirstElement).ToList();
            var combinationsWithFirstElementList = new List<string[]>();
            foreach (var combs in combsWithOutFirstElement)
            {
                var newItem = combs;
                    newItem = newItem.Append(firstElement).ToArray();
                    combinationsWithFirstElementList.Add(newItem); 
            }

            var combinationsWithFirstElement = combinationsWithFirstElementList;
            var result = combsWithOutFirstElement.Concat(combinationsWithFirstElement).ToArray();
            return result; 
            
            //time complexity : O(2^n) 
            // space complexity O (n)
        } 
    }
}