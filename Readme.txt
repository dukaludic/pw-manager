#include <stdio.h>
#include <string.h>
#include <strings.h>
#include <stdlib.h>
#include <ctype.h>
#include <stdbool.h>

#include "dictionary.h"

// Represents a node in a hash table
typedef struct node
{
    char word[LENGTH + 1];
    struct node *next;
}
node;

// Number of buckets in hash table
const unsigned int N = 26;

// Hash table
node *table[N];

int num = 0;

int word_count = 0;

node *tmp = NULL;

node *n = NULL;

// Returns true if word is in dictionary else false
bool check(const char *word)
{
    // TODO
    int table_location = hash(word);
    tmp = table[table_location];
    while (tmp != NULL)
    {

        if (strcasecmp(word, n->word) == 0)
        {
            return true;
        }
        else if(tmp != NULL)
        {
            tmp = n->next;
        }

    }
    return false;
}

// Hashes word to a number
unsigned int hash(const char *word)
{
    // TODO
     unsigned long hash = 5381;

    int c = *word;

    while (c == *word++)
    {
        hash = ((hash << 5) + hash) + c; /* hash * 33 + c */
    }
    return hash % N;
}

// Loads dictionary into memory, returning true if successful else false
bool load(const char *dictionary)
{
    // TODO
    FILE *file = fopen(dictionary, "r");
    {
        if (file == NULL)
        {
            return false;
        }
    }
    char fileword[50];
    while(fscanf(file, "%s", fileword) != EOF)
    {
        n = malloc(sizeof(node));
        {
            if (n == NULL)
            {
                return false;
            }
        }
        strcpy(n->word, fileword);
        n->next = NULL;
        num = hash(fileword);

        if (table[num] == NULL)
        {
            table[num] = n;
        }
        else
        {
            n->next = table[num];
            table[num] = n;
        }
        word_count++;
    }
    return true;
}

// Returns number of words in dictionary if loaded else 0 if not yet loaded
unsigned int size(void)
{
    // TODO
    return word_count;
}

// Unloads dictionary from memory, returning true if successful else false
bool unload(void)
{
    // TODO
    node *tmp_node = NULL;
    node *tmp_node2 = NULL;

    for (int i = 0; i < N; i++)
    {
        tmp_node = table[i];

        while(tmp_node != NULL)
        {
            tmp_node2 = tmp_node;
            tmp_node = n->next;
            free(tmp_node2);
        }
    }

    return true;
}