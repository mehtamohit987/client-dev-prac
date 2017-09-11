using System;

namespace DataStructures
{
     public class CircularBuffer<T> : Buffer<T>
    {
        private int _capacity;

        public CircularBuffer() : this(capacity: 10)
        {

        }

        public CircularBuffer(int capacity)
        {
            _capacity = capacity;
        }

        public override void Write(T value)
        {
            base.Write(value);
            if (_queue.Count > _capacity)
            {
                OnItemDiscarded(_queue.Dequeue(), value);
            }
        }

        private void OnItemDiscarded(T t, T value)
        {
            if (t != null)
            {
                ItemDiscarded(this, new ItemDiscardedEventArgs<T>(t, value));
            }
        }

        public event EventHandler<ItemDiscardedEventArgs<T>> ItemDiscarded; 

        public class ItemDiscardedEventArgs<T> : EventArgs
        {
            public ItemDiscardedEventArgs(T discard, T newitem)
            {
                ItemDiscarded = discard;
                NewItem = newitem;
            }
            public T ItemDiscarded { get; set; }
            public T NewItem { get; set; }
        }
        public bool IsFull
        {
            get { return _queue.Count == _capacity; }
        }
    }

    //public class CircularBuffer<T> : IBuffer<T>
    //{
    //    private T[] _buffer;
    //    private int _start;
    //    private int _end;

    //    public CircularBuffer() : this(capacity: 10)
    //    {

    //    }

    //    public CircularBuffer(int capacity)
    //    {
    //        _buffer = new T[capacity + 1];
    //        _start = 0;
    //        _end = 0;
    //    }

    //    public void Write(T value)
    //    {
    //        _buffer[_end] = value;
    //        _end = (_end + 1) % _buffer.Length;
    //        if (_end == _start)
    //        {
    //            _start = (_start + 1) % _buffer.Length;
    //        }
    //    }
    //    public T Read()
    //    {
    //        var result = _buffer[_start];
    //        _start = (_start + 1) % Capacity;
    //        return result;
    //    }

    //    public int Capacity
    //    {
    //        get { return _buffer.Length; }
    //    }

    //    public bool IsEmpty
    //    {
    //        get { return _end == _start; }
    //    }

    //    public bool IsFull
    //    {
    //        get { return (_end + 1) % _buffer.Length == _start; }
    //    }
    //}
}
