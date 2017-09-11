using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataStructures
{
    public static class BufferExtensions
    {
        public delegate void Printer<T>(T data);
        //public delegate void Printer(object data);
        public static void Dump<T>(this IBuffer<T> buffer, Printer<T> print)
        {
            foreach (var item in buffer)
            {
                print(item);
            }
        }
        internal static IEnumerable<TOutput> Map<T, TOutput>(this IBuffer<T> buffer, Converter<T, TOutput> converter)
        {
            //foreach (var item in buffer)
            //{
            //    yield return converter(item);
            //}
            return buffer.Select(i => converter(i));
        }

        //public static IEnumerable<TOutput> AsEnumerableOf<T, TOutput>(this IBuffer<T> buffer)
        //{
        //    var converter = TypeDescriptor.GetConverter(typeof(T));
        //    foreach (var item in buffer)
        //    {
        //        yield return (TOutput)converter.ConvertTo(item, typeof(TOutput));
        //    }
        //}
    }
}
