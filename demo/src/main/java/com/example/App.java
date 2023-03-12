package com.example;

/**
 * Hello world!
 *
 */

import java.io.*;
import java.sql.*;


public class App 
{
    public static void main( String[] args )
    {
        try{
            Connection dbConn = DriverManager.getConnection("jdbc:mysql://localhost:3306/STUDENT",
															"root", "examly");
            if (dbConn != null) {
				System.out.println("Connection Successful");
			}
			else {
				System.out.println("Failed to make connection!");
			}
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
