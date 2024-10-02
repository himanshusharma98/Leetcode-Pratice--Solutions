using System;
using System.Collections.Generic;

public class AllOne
{
    private Dictionary<string, int> d;
    private int op;
    private string res;

    public AllOne()
    {
        d = new Dictionary<string, int>();
        op = 0;
        res = "";
    }

    public void Inc(string key)
    {
        op = 0;
        if (d.ContainsKey(key))
        {
            d[key]++;
        }
        else
        {
            d[key] = 1;
        }
    }

    public void Dec(string key)
    {
        op = 0;
        if (d.ContainsKey(key))
        {
            if (d[key] > 1)
            {
                d[key]--;
            }
            else
            {
                d.Remove(key);
            }
        }
    }

    public string GetMaxKey()
    {
        if (op == 1)
        {
            return res;
        }
        op = 1;
        if (d.Count > 0)
        {
            int maxVal = int.MinValue;
            string maxKey = "";
            foreach (var pair in d)
            {
                if (pair.Value > maxVal)
                {
                    maxVal = pair.Value;
                    maxKey = pair.Key;
                }
            }
            res = maxKey;
            return maxKey;
        }
        res = "";
        return "";
    }

    public string GetMinKey()
    {
        if (op == 2)
        {
            return res;
        }
        op = 2;
        if (d.Count > 0)
        {
            int minVal = int.MaxValue;
            string minKey = "";
            foreach (var pair in d)
            {
                if (pair.Value < minVal)
                {
                    minVal = pair.Value;
                    minKey = pair.Key;
                }
            }
            res = minKey;
            return minKey;
        }
        res = "";
        return "";
    }
}