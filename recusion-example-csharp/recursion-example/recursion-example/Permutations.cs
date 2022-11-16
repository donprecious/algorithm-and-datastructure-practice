using System;
using System.Collections.Generic;
using System.Linq;

namespace recursion_example
{
    public class Permutations
    {
        public static void Compute()
        {
            var elements = new[] { "a", "b", "c" };
            var result = Permutation(elements);
            foreach (var item in result)
            {
                var str = string.Join(',', item);
                Console.WriteLine(str);
            }
        }
        public static string[][] Permutation(string[] elements)
        {
            if (elements.Length == 0) return new[] { Array.Empty<string>() };

            var firsElement = elements[0];
            var restElement = elements.Skip(1).ToArray();
            var permutationWithoutFirst = Permutation(restElement);
            var allPermutation = new List<string[]>();
            foreach (var item in permutationWithoutFirst)
            {
               
                for (int i = 0; i <= item.Length; i++)
                {
                    var firstPart  = item.Take(i).ToList();
                    var lastPart = item.Skip(i).Take(item.Length - i).ToList();
                    var newItem = new List<string>(); 
                    newItem.AddRange(firstPart);
                    newItem.Add(firsElement); 
                    newItem.AddRange(lastPart); 
                    allPermutation.Add(newItem.ToArray()); 
                }
            }

            return allPermutation.ToArray();
        }
    }
}