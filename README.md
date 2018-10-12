# คำสั่งพื้นฐาน
## RUN Environment Default is "Development"
```
    dotnet run --environment "EnvironmentName"
```
## BUILD
```
    dotnet build
```

# การสร้าง DbContext SQLServer
```
    dotnet ef dbcontext scaffold [Connection String] [Provider] [Output Directory] [Table]
```
### Connection String
```
    "data source={ServerName};initial catalog={DBname};persist security info=True;user id={Username};password={Password};MultipleActiveResultSets=True;App=EntityFramework;" 
``` 
### Provider
```
    Microsoft.EntityFrameworkCore.SqlServer
```
### Output Directory
```
    --output-dir [FolderName]
```
### Table
```
    -t [TableName] -t [TableName] -t [TableName] -t [TableName] -f
```
