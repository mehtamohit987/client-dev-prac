using System;
using static DataStructures.BufferExtensions;

namespace DataStructures
{
    class Program
    {
        static void ConsoleWrite(double data)
        {
            Console.WriteLine(data);
        }

        static void Main(string[] args)
        {
            var buffer = new CircularBuffer<double>(capacity: 3);
            buffer.ItemDiscarded += ItemDiscarded; ;
            ProcessInput(buffer);
            //var consoleOut = new Printer<double>(ConsoleWrite);
            //buffer.Dump(consoleOut);
            buffer.Dump(ConsoleWrite);

            Converter<double, DateTime> converter = d => new DateTime(2010, 1, 1).AddDays(d);
            foreach (var item in buffer.Map(converter))
            {
                Console.WriteLine(item);
            }

            //foreach (var item in buffer.AsEnumerableOf<double, int>())
            //{
            //    Console.WriteLine(item);
            //}
            ProcessOutput(buffer);
        }

        private static void ItemDiscarded(object sender, CircularBuffer<double>.ItemDiscardedEventArgs<double> e)
        {
            Console.WriteLine("Buffer full. Discarding {0} New item is {1}", e.ItemDiscarded, e.NewItem);
        }

        private static void ProcessOutput(IBuffer<double> buffer)
        {
            var sum = 0.0;
            Console.WriteLine("Buffer: ");
            while (!buffer.IsEmpty)
            {
                sum += buffer.Read();
            }
            Console.WriteLine(sum);
        }

        private static void ProcessInput(IBuffer<double> buffer)
        {
            while (true)
            {
                var value = 0.0;
                var input = Console.ReadLine();

                if (double.TryParse(input, out value))
                {
                    buffer.Write(value);
                    continue;
                }
                break;
            }
        }
    }

}