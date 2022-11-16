using System;
using System.Linq;

namespace recursion_example
{
    public static class StringPeriod
    {
        public static int trackerIndex = 0;
        public static string longestSubstring = "";

        public static void Compute()
        {
            var str = "abcababcababcab";
            var result = StringPeriods(str);
            Console.WriteLine(result);
        }
        public static  String StringPeriods(string str)
        {
            trackerIndex = (str.Length / 2);
            FindSubstring(str);
            return longestSubstring;
        }
     

        public static void  FindSubstring(string str)
        {
            if (trackerIndex == 0)
            {
                longestSubstring = "-1";
                return;
            }

            var str1 = String.Join(String.Empty, str.Take(trackerIndex));
            var str2  =String.Join(String.Empty, str.Skip(trackerIndex).Take(str1.Length));
            if (str1 == str2)
            {
               longestSubstring = str1;
               return;
            }
            trackerIndex -= 1;
            FindSubstring(str);
        }
    }
}